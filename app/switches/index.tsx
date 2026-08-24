import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          value={state.isActive}
          className="mb-4"
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />

        <ThemedSwitch
          text="Hambriento"
          value={state.isHungry}
          className="mb-4"
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />

        <ThemedSwitch
          text="Contento"
          value={state.isHappy}
          className="mb-4"
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
