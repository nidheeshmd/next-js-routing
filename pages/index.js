import Link from "next/link";
import { useRouter } from "next/router";

function Home(){

    const router = useRouter();

    const handleClick = () => {
        router.push("/product");
    }
    return (
    <div>
        <h1>Home Page</h1>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <Link href="/product">
            <a>product</a>
        </Link>
        <button onClick={handleClick}>
            Go to product page
        </button>
    </div>
    );
}

/* index.js in the root folder(pages) will map as the root domain page*/

export default Home;