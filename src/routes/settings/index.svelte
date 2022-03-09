<script lang="ts">
import { settings } from "../../stores";

const handleChange = (event) => {
    // debugger;
    settings.update({ dark: event.target.checked })
}
</script>



<label for="dark">Dark mode
    <input type="checkbox" checked={$settings.dark} on:change={handleChange} />
</label>