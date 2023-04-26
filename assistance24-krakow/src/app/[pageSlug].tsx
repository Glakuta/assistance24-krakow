import React from 'react'
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import getAllPages from '../../lib/pages'

type Props = {}

const Page = (props: Props) => {
  return (
    <div>[pageSlug]</div>
  )
}

export default Page