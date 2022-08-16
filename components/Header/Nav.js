import Link from "next/link"

import AppLink from "./AppLink"

const Nav = () => {
    return (
        <nav>
            <ul>
                <AppLink href="/" name="Астероиды" />
                <AppLink href="/orders" name="Заказ" />
                {/*<li><Link href="/"><a>Астероиды</a></Link></li>*/}
                {/*<li><Link href="/orders"><a>Заказ</a></Link></li>*/}
            </ul>

        </nav>
    );
};

export default Nav;
