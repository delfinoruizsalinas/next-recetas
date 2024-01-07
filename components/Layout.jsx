import Head from "next/head"
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from "next/image"
import Link from "next/link"

const name = 'Blueename';

export default function Layout({children,title,description, home}) {
  return (
    <div className={styles.container}>
        <Head>
            <title> { title } </title>
            <meta name="description" content={ description } />
        </Head>
        <header className={styles.header}>
            {home ? (
            <>
                <Image
                    priority
                    src="/img/1.jpeg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
            ) : (
            <>
                <Link href="/">
                <Image
                    priority
                    src="/img/2.jpeg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                />
                </Link>
                <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                </Link>
                </h2>
            </>
            )}
        </header>
        
        <nav>
        <ul>
            <li>
                <Link href="/">Inicio</Link>
            </li>
            <li>
                <Link href="/recetas">Recetas</Link>
            </li>
            <li>
                <Link href="/productos">Productos</Link>
            </li>
            <li>
                <Link href="/productos/detalle-productos">Detalle Productos</Link>
            </li>
        </ul>
        </nav>
        <main> {children} </main>
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
        )}
    </div>
  )
}

Layout.defaultProps = {
    title:'Next.js | Sistema', 
    description:'Descripcion de Sistema',
}