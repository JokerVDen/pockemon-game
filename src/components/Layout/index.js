import s from './index.module.css';

const Layout = ({ title, urlBg, colorBg, children }) => {

    const style = {
        ...(colorBg ? { backgroundColor: colorBg } : {}),
        ...(urlBg ? { backgroundImage: `url(${urlBg})` } : {}),
    }

    return (
        <section className={s.root} style={style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;