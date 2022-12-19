import style from './Home.module.css'

export default function Home() {
    return (
        <div>
            <div id={style.banner}>
                <img src="https://st2.depositphotos.com/3867481/12103/v/950/depositphotos_121038128-stock-illustration-best-deal-red-vector-best.jpg" alt="best deal" />
                <div id={style.banneText}>
                    <h1>Hurry Up!!</h1>
                    <h1>Order Now</h1>
                    <h1>Super Sale End in 2 days</h1>
                </div>
                <img src="https://photos5.appleinsider.com/gallery/31060-51500-apple-super-sale-l.jpg" alt="super sale" />
            </div>
        </div>
    )
};
