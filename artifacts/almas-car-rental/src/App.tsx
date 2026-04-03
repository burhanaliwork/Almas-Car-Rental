import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SportsCars from "@/pages/SportsCars";
import EconomyCars from "@/pages/EconomyCars";
import FamilyCars from "@/pages/FamilyCars";
import VipCars from "@/pages/VipCars";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sports" component={SportsCars} />
        <Route path="/economy" component={EconomyCars} />
        <Route path="/family" component={FamilyCars} />
        <Route path="/vip" component={VipCars} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
