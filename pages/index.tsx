import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportTable from '../components/ReportTable'
import CreateForm from '../components/CreateForm'
import useInput from '../hooks/useInput'
import { useState } from 'react'

const CookieStandAdmin: NextPage = () => {
  const [cookieStands, setCookieStands] = useState([])
  const [location, bindLocation, resetLocation] = useInput('')
  const [
    maxCustomersPerHour,
    bindMaxCustomersPerHour,
    resetMaxCustomersPerHour,
  ] = useInput('')
  const [
    minCustomersPerHour,
    bindMinCustomersPerHour,
    resetMinCustomersPerHour,
  ] = useInput('')
  const [aveCookiesPerSale, bindAveCookiesPerSale, resetAveCookiesPerSale] =
    useInput('')

  function createHandler(e: any) {
    e.preventDefault()
    const cookieStand = {
      location,
      maxCustomersPerHour,
      minCustomersPerHour,
      aveCookiesPerSale,
    }
    setCookieStands([...cookieStands, cookieStand])
    resetLocation()
    resetMaxCustomersPerHour()
    resetMinCustomersPerHour()
    resetAveCookiesPerSale()
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <CreateForm
          createHandler={createHandler}
          bindLocation={bindLocation}
          bindMaxCustomersPerHour={bindMaxCustomersPerHour}
          bindMinCustomersPerHour={bindMinCustomersPerHour}
          bindAveCookiesPerSale={bindAveCookiesPerSale}
        />
        <div className="my-2 mx-auto flex-col text-center text-sm">
          <div className="p-2">Report Table Coming Soon...</div>
          <div className="p-4">
            {cookieStands.map((cookieStand, key) => (
              <p key={key}>{JSON.stringify(cookieStand)}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CookieStandAdmin
