import Link from "next/link"
import { useRouter } from "next/router"

const AppLink = ({href, name}) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <li>
            <Link
                href={href}
            >
                <a
                    style={{
                        fontWeight: isActive ? "bold" : "normal",
                        textDecoration: !isActive ? "underline" : "none"
                    }}
                >{name}</a>
            </Link>
        </li>
    );
};

export default AppLink;
