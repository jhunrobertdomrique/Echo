import Feed from '@components/Feed';

const Home = () => (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Collect & Explore
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'>
                {' '}
                Generated Inspiration Prompts
            </span>
        </h1>
        <p className='desc text-center'>
            Echo is a free AI tool empowering users to explore, create, and
            share versatile creative prompts applicable to all leading AI chat
            platforms
        </p>

        <Feed />
    </section>
);

export default Home;
