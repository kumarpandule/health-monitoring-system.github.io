import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { UserContext } from '@lib/context';
import Metatags from '@components/Metatags';

import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      <Metatags title="Enter" description="Sign up for this amazing app!" />
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <div class="row py-6">
        <div class="col-6 col-s-9">
          <img src="/animated/login.gif"></img>
        </div>
        <div class="col-6 col-s-9">
          <form class='py-6'>
            {/* <img src="/hacker.png" class='profile-img center  padding-6'></img> */}
            <h1 class="title">Welcome</h1>
            <div class="py-2">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Username</h5>
                <input class="bg-gray7 bg-opacity-30 text-white text-lg block py-2 px-1 w-full border-b-4 border-b-white border-t-0 border-r-0 border-l-0 rounded-none outline-none focus-visible:outline-none" type="email" name="email"></input>
              </div>
            </div>
            <div class="py-2">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input type="password" class="bg-gray7 bg-opacity-30 text-white text-lg block py-2 px-1 w-full border-b-4 border-b-white border-t-0 border-r-0 border-l-0 rounded-none outline-none focus-visible:outline-none"></input>
              </div>
            </div>
            <a href="#" class="py-2">
              Forgot Password?
            </a>
            <div class="py-1"></div>
            <input type="submit" class="bg-blue-500 font-sans text-white font-bold inline-block text-center shadow-md px-4 py-3 my-2 w-auto border-none cursor-pointer hover:bg-blue-500" value="Login"></input>
            <h5>Or with account:</h5>
            <a className="btn py-4 px-6" onClick={signInWithGoogle}>
              <img src={"/google.png"} width="30px" /><div class="px-1"></div> Sign in with Google
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <>
    <div className='row'>
     <div className='col-3 col-s-9'>
      <h1>Wellcome Doctor</h1>
      <div class="py-2"></div>
      <button className="btn py-6 px-6"><a href='/admin'>Add Patient</a></button>
      <div class="py-2"></div>
      <button className="btn py-6 px-6">Manage Patients</button>
      <div class="py-2"></div>
      <button className='btn' onClick={() => auth.signOut()}>Sign Out</button>
     </div>
     <div className='col-9 col-s-9'></div>
    </div>
    </>
  );
}

// Username form
function UsernameForm() {
  const [formValue, setFormValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
  };

  const onChange = (e) => {
    // Force form value typed in form to match correct format
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  //

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  // Hit the database for username match after each debounced change
  // useCallback is required for debounce to work
  const checkUsername = useCallback(
    debounce(async (username) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log('Firestore read executed!');
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  return (
    !username && (
      <section>
        <h3>Choose Username</h3>
        <form onSubmit={onSubmit}>
          <input name="username" placeholder="myname" value={formValue} onChange={onChange} />
          <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>

          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  );
}

function UsernameMessage({ username, isValid, loading }) {
  if (loading) {
    return <p>Checking...</p>;
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>;
  } else if (username && !isValid) {
    return <p className="text-danger">That username is taken!</p>;
  } else {
    return <p></p>;
  }
}
