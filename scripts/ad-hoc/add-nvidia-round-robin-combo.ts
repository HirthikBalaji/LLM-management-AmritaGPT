import { createCombo, getComboByName, updateCombo } from "../../src/lib/db/combos";

async function main() {
  const comboData = {
    name: "nvidia-round-robin",
    strategy: "round-robin",
    description: "Round-robin load balancing across active NVIDIA provider models",
    models: [
      "nvidia/google/diffusiongemma-26b-a4b-it",
      "nvidia/meta/llama-3.2-11b-vision-instruct",
      "nvidia/meta/llama-3.2-90b-vision-instruct",
      "nvidia/minimaxai/minimax-m3",
      "nvidia/nvidia/llama-3.1-nemoguard-8b-content-safety",
      "nvidia/nvidia/ising-calibration-1.5-31b",
      "nvidia/meta/muse-glimmer-30b",
      "nvidia/nvidia/llama-3.1-nemotron-safety-guard-8b-v3",
      "nvidia/nvidia/nemotron-3-nano-30b-a3b",
      "nvidia/nvidia/nemotron-3-super-120b-a12b",
      "nvidia/nvidia/nemotron-3.5-content-safety",
      "nvidia/nvidia/nemotron-3.5-lightning-30b-a3b",
      "nvidia/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
      "nvidia/nvidia/riva-translate-4b-instruct-v1.1",
      "nvidia/nvidia/riva-translate-4b-instruct-v2",
      "nvidia/poolside/laguna-xs-2.1",
      "nvidia/openai/gpt-oss-20b"
    ]
  };

  const existing = await getComboByName("nvidia-round-robin");
  if (existing && existing.id) {
    console.log("Updating existing combo:", existing.id);
    await updateCombo(existing.id, comboData as any);
  } else {
    console.log("Creating new combo...");
    await createCombo(comboData as any);
  }
  const result = await getComboByName("nvidia-round-robin");
  console.log("Successfully saved nvidia-round-robin combo:");
  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
