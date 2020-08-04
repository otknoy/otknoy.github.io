import React from 'react'

export default function Portfolio({portfolio}) {
  return (
      <section>
        <h1>Portfolio</h1>

        <ul>
        {
          portfolio.map((e, i) => (<li key={i}><a href={e.link}>{e.name}</a></li>))
        }
        </ul>
      </section>
  )
}
