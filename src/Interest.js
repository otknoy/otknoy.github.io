import React from 'react'

export default function Interest({interest}) {
  return (
      <section>
        <h1>Interest</h1>

        <ul>
        {
          interest.map((e, i) => (<li key={i}>{e}</li>))
        }
        </ul>
      </section>
  )
}
