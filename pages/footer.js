import Link from 'next/link';
import React from 'react'
import { FaGithubAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer class="container text-center my-6 p-8 text-gray5 dark:text-gray3">
      <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray5 to-gray4 rounded-full"></div>
      <div class="py-3">
        Need help? Email{" "}
        <a href="kumarpandule20@gmail.com">
          <strong class=" font-bold">kumarpandule20@gmail</strong>
        </a>
      </div>
      <div class="flex justify-center items-center my-2">
        <a href="https://github.com/kumarpandule2000/health-monitoring-system.github.io">
          <i class="w-6 inline-block mx-2">
            <FaGithubAlt size={24} />
          </i>
        </a>
      </div>
      <h6>Helpful Links</h6>
      <div class="py-3">
        <Link href="/about"><span>About</span> |</Link>
        <Link href="#"><span> Contrib</span> |</Link>
        <Link href="#"><span> Privacy</span> |</Link>
        <Link href="#"><span> Terms</span></Link>
      </div>
      <div class="text-xs">
        Copyright © 2022 Health Monitoring System LLC <br />
      </div>
    </footer>
  );
}