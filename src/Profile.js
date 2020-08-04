import React from 'react'

export default function Profile({name, description, links}) {
  return (
      <section>
        <h1>Profile</h1>

        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>

        <Links {...links}></Links>
      </section>
  )
}


const Links = ({github, twitter, blog}) => (
    <>
      <ul>
        <li><a href={github}>github</a></li>
        <li><a href={twitter}>Twitter</a></li>
        <li><a href={blog}>Blog</a></li>
      </ul>
    </>
)
 
