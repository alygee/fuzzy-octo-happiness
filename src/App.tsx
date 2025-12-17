import { FormStepper } from "@/components/FormStepper";

function App() {
  return (
    <div className="min-h-screen bg-background-default p-4">
      <FormStepper />
      <div className="bg-primary-4p">4% opacity</div>
      <div className="bg-primary-8p">8% opacity</div>
      <div className="bg-primary-12p">12% opacity</div>
      <div className="bg-primary-20p">20% opacity</div>
      <div className="bg-primary-30p">30% opacity</div>
      <div className="bg-primary-50p">50% opacity</div>
      <div className="bg-primary-80p">80% opacity</div>
    </div>
  );
}

export default App;
