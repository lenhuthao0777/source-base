import { FC, useLayoutEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const UserLayout: FC = () => {
  const userInfo = true

  return (
    <div>
      {userInfo ? (
        <>
        <h2>test</h2>
          <Outlet />
        </>
      ) : (
        <Navigate to='/' replace />
      )}
    </div>
  )
}

export default UserLayout
