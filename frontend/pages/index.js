import Link from 'next/link';

const Home = props => (
    <div>
        <p>Home.. </p>
        <Link href="/sell">
            <p>Sell!</p>
        </Link>
    </div>
)

export default Home;