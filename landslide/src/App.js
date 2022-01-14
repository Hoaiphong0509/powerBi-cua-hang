import { useState, useEffect } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'

const REPORT_ID = '3a4ea71c-5277-4419-96b9-4f183608bb81'

function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = (await axios.get('/api/powerbi')).data
        setToken(data.access_token)
      } catch (error) {}
    }

    fetchdata()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PowerBIEmbed
          embedConfig={{
            type: 'report', // Supported types: report, dashboard, tile, visual and qna
            id: REPORT_ID,
            embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${REPORT_ID}`,
            accessToken: token,
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={
            new Map([
              [
                'loaded',
                function () {
                  console.log('Report loaded')
                },
              ],
              [
                'rendered',
                function () {
                  console.log('Report rendered')
                },
              ],
              [
                'error',
                function (event) {
                  console.log(event.detail)
                },
              ],
            ])
          }
          cssClassName={'Embedded-Container'}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport
          }}
        />
        <section className="ahp">
          <iframe
            className="ahp_iframe"
            src="https://bulisor.github.io/Experiments/HTML5Application/"
          />
        </section>
      </header>
    </div>
  )
}

export default App
