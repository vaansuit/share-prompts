import '@styles/global.css';
import Provider from './components/Provider'
import Nav from './components/Nav';

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
          <Nav/>
            {children}
        </main>

        </Provider>
     
        </body>
    </html>
    
  )
}

export default RootLayout