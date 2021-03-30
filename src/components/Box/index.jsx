import './style.css'

export default function Box({title, ...props}) {
  const children = props.children
  return (
    <div className="box">
      <div className="box-title">{title}</div>
      <div className="box-body">
        {children}
      </div>
    </div>
  )
}