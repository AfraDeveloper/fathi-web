import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
const Blog = () => {
    const { t: translate } = useTranslation("common")
    const { locale, locales, push } = useRouter()
    const handleLcoal = l => {
        push("/blog", undefined, { locale: l })
    }
    return (
        <div className='text-center mt-48'>
            <div>{translate("hello")}</div>

            <Link href="/blog" locale="en">blog</Link>
            <h1>{locale}</h1>
            <div>
                <button onClick={() => handleLcoal("fa")} className='bg-red-500 px-16'>FA</button>
                <button onClick={() => handleLcoal("en")} className='bg-sky-500 px-16'>EN</button>
            </div>
        </div>
    )
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
export default Blog