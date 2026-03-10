import { Box } from "lucide-react"
import Button from "./ui/Button"
import { useOutletContext } from "react-router"

const Navbar = () => {
    const { isSignedIn, username, signIn, signOut } = useOutletContext<AuthContext>()

    const handleAuthClick = async () =>{
        if (isSignedIn) {
          try {
            await signOut()
          } catch (err) {
            console.log(err);
          }
          return 
        }
        if (!isSignedIn) {
          try {
            await signIn()
          } catch (err) {
            console.log(err)
          }
          return
        }
    }

    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className="logo" />
                        <span className="name">Roomify</span>
                    </div>
                    <ul className="links">
                        <a 
                            href="/"
                        >
                            Product
                        </a>
                        <a 
                            href="/"
                        >
                            Pricing
                        </a>
                        <a 
                            href="/"
                        >
                            Community
                        </a>
                        <a 
                            href="/"
                        >
                            Enterprise
                        </a>
                    </ul>
                </div>
                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className="greeting">Hi, {username}</span>
                            <Button
                                onClick={handleAuthClick}
                                className="btn"
                                size='sm'
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={handleAuthClick}
                                className="login"
                                >
                                Login
                            </Button>
                            <a
                                className="cta"
                                href="#upload"
                                >
                                Get started
                            </a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
