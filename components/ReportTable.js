export default function ReportTable(props) {
  return (
    <div className="my-2 mx-auto flex-col text-center text-sm">
      <div className="p-2">Report Table Coming Soon...</div>
      <div className="p-4">{`{"location":"${props.location}","minCustomers":${props.minCustomersPerHour},"maxCustomers":${props.maxCustomersPerHour},"aveCookies":${props.aveCookiesPerSale}}`}</div>
    </div>
  )
}
