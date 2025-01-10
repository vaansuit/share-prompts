
import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit } ) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text_left'>
            <span className='blue_gradient'>{type} Post</span>
        </h1>
        <p className="desc text-left max-w-md">
          {type} and share amazing prompts with the world
          showing your awesome discoveries!
        </p>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Your AI Prompt!
        </span>
        <label className="w-full">
        <textarea 
          value={post.prompt}
          onChange={(e) => setPost ({...post, prompt: e.target.value })}
          placeholder="Write your prompt here!"
          className="form_textarea"
        />
        </label>

        <span className="font-satoshi font-semibold text-base text-gray-700">
          Tag {` `}
          <span className="font-normal">(#product, #webdev, #nextJS)</span>
        </span>
        <label className="w-full mb-5">
        <input 
          value={post.tag}
          onChange={(e) => setPost ({...post, tag: e.target.value })}
          placeholder="#tag"
          className="form_input"
        />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4 w-full">
          <Link href="/" className="text-gray-500 text-sm">
          Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...`: type}
          </button>
        </div>
        
    </section>
  )
}

export default Form