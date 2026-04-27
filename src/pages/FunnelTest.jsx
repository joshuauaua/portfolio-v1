import { useEffect } from 'react'

export default function FunnelTest() {
  useEffect(() => {
    if (!window.convertflow) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://js.convertflow.co/production/websites/82174.js'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      <div
        className="cf-cta-snippet cta197704"
        data-website-id="82174"
        data-cta-id="197704"
      />
    </div>
  )
}
