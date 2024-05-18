
import Link from 'next/link';
import './page.css'
export default function Home() {
  return (
    <>
   <h1>Quiz App</h1>
        <Link href='/Quiz'>
          <button>Start Quiz</button>
        </Link>
    </>
  );
}
