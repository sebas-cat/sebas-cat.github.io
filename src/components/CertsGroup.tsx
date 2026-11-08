import type { Certs } from '../data/certs'
import { View } from '../hooks/view'

interface CertsGroupProps {
  title: string
  items: Certs[]
}

const CertsGroup = ({ title, items }: CertsGroupProps) => {
  const { ref, inView } = View<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal data-inview={inView}>
      <div>
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.url ? <a href={item.url}>{item.name}</a> : item.name}
              <p className="hud">
                {item.issuer}
                {item.date && ` / ${item.date}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CertsGroup