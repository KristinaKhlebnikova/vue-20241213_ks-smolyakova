import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0);
    const secondOperand = ref(0);
    const operator = ref(null);

    const result = computed(() => {
      return calculate()
    })
    
    function calculate() {
      switch (operator.value) {
        case 'sum': {
          return firstOperand.value + secondOperand.value;
        }
        case 'subtract': {
          return firstOperand.value - secondOperand.value;
        }
        case 'multiply': {
          return firstOperand.value * secondOperand.value;
        }
        case 'divide': {
          return firstOperand.value / secondOperand.value;
        }
      }
    }
    
    return {
      result,
      operator,
      firstOperand,
      secondOperand
    }},


  template: `
    <div class="calculator">
    <input type="number" aria-label="First operand" v-model="firstOperand" />


      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})