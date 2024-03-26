import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SettingTabs() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('feedback')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)

    const tabParam = searchParams.get('tab')

    if (tabParam && ['feedback', 'recommend', 'bug'].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [location.search])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)

    searchParams.set('tab', activeTab)

    navigate({ search: searchParams.toString() })
  }, [activeTab, navigate])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => handleTabClick('feedback')}
              className={activeTab === 'feedback' ? 'active' : ''}
            >
              Tab 1
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('recommend')}
              className={activeTab === 'recommend' ? 'active' : ''}
            >
              Tab 2
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick('bug')}
              className={activeTab === 'bug' ? 'active' : ''}
            >
              Tab 3
            </button>
          </li>
        </ul>
      </nav>

      <div>
        {activeTab === 'feedback' && <div>Content for Tab 1</div>}
        {activeTab === 'recommend' && <div>Content for Tab 2</div>}
        {activeTab === 'bug' && <div>Content for Tab 3</div>}
      </div>
    </div>
  )
}

export default SettingTabs
