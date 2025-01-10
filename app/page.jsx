import Feed from './components/Feed';
import Nav from './components/Nav'

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
      <Nav />
        <h1 className = "head_text text-center">
            Discovery and Share
            <br className = "max-md:hidden" />
        </h1>
        <span className = "orange_gradient text-center">AI-Powered Prompts</span> 
        <p className = "desc text-center">
            The Open Source Tool for sharing your prompts
            with the whole WORLD 🌎
        </p>
        <Feed/>
    </section>
  )
}

export default Home