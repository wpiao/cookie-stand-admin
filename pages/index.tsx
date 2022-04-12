import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReportTable from '../components/ReportTable'
import useInput from '../hooks/useInput'
import { useState } from 'react'

const Home: NextPage = () => {
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
        <form
          onSubmit={createHandler}
          className="my-6 mx-auto w-3/4 flex-col items-center bg-emerald-300 p-2 font-semibold"
        >
          <div className="p-2 text-center">Create Cookie Stand</div>
          <div className="flex p-2">
            <label
              htmlFor="location"
              className="block pr-2 text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              {...bindLocation}
              type="text"
              name="location"
              className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between p-2">
            <div className="w-1/4 flex-col p-2">
              <label
                htmlFor="minCustomersPerHour"
                className="block text-center text-xs font-medium text-gray-700"
              >
                Minimum Customers per Hour
              </label>
              <input
                {...bindMinCustomersPerHour}
                type="text"
                name="minCustomersPerHour"
                className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/4 flex-col p-2">
              <label
                htmlFor="maxCustomersPerHour"
                className="block text-center text-xs font-medium text-gray-700"
              >
                Maximum Customers per Hour
              </label>
              <input
                {...bindMaxCustomersPerHour}
                type="text"
                name="maxCustomersPerHour"
                className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-1/4 flex-col p-2">
              <label
                htmlFor="aveCookiesPerSale"
                className="block text-center text-xs font-medium text-gray-700"
              >
                Average Cookies per Sale
              </label>
              <input
                {...bindAveCookiesPerSale}
                type="text"
                name="aveCookiesPerSale"
                className="block w-full rounded-sm border-gray-300 pl-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button className="w-1/4 bg-green-500 p-2 font-bold hover:cursor-pointer hover:bg-green-700">
              Create
            </button>
          </div>
        </form>
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

export default Home
