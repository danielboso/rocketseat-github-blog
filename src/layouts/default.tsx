import { Outlet } from 'react-router-dom'
import cover from '../../src/assets/Cover.png'
import { CoverImage, PageContent } from './styles'

export function DefaultLayout() {
  return (
    <main>
      <CoverImage src={cover} alt="" />
      <PageContent>
        <Outlet />
      </PageContent>
    </main>
  )
}