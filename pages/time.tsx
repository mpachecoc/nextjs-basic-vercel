import { GetStaticProps } from 'next'

export default function Time({ staticDateString }) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <>
      <div>{dynamicDateString} - Dynamic Time</div>
      <div>{staticDateString} - getStaticProps Time</div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const staticDate = new Date();
  const staticDateString = staticDate.toUTCString();

  return {
    props: {
      staticDateString
    },
    revalidate: 2
  }
};
