import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activateClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activateClassName={styles.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}
