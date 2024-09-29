import Link from "next/link";
import logoImg from '@/assets/logo.png'
import style from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {


    return <> <MainHeaderBackground />
        <header className={style.header}>
            <Link className={style.logo} href={"/"}>
                {/* O priority tira o lazy loading da imagem */}
                <Image src={logoImg} alt="A plate with food on it" priority />
                Next Level Food
            </Link>

            <nav className={style.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>

            </nav>
        </header>
    </>
}