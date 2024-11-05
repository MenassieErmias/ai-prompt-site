import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">
          &nbsp;AI powered prompts
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta mollitia consequuntur voluptatibus distinctio, voluptate atque, autem quo debitis, minima necessitatibus illum optio temporibus incidunt nostrum vel? Dolorum, quis! Odio.
      </p>

      <Feed />

    </section>
  )
}

export default Home