import '@styles/global.css';
import Provider from './components/Provider'

export const metadata = {
    title: 'Promptopia',
    description: 'Portfolio Work'
}
const RootLayout = ({children}) => {
  return (
    <html>
        <body>
        <Provider>
        <div className = "main">
            <div className = "gradient" />
        </div>
        <main className = "app">
            {children}
        </main>

        </Provider>
        </body>
    </html>
    
  )
}

export default RootLayout