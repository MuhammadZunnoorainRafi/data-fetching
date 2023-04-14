import Link from 'next/link';
import React from 'react';

function HeroScreen() {
  return (
    <div>
      <Link className="btn btn-accent" href="/users">
        Fetch Users
      </Link>
    </div>
  );
}

export default HeroScreen;
