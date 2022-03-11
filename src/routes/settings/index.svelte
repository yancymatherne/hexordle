<script lang="ts">
    import { settings } from "../../stores";

    const handleChange = (event) => {
        settings.update({ dark: event.target.checked })
    }
</script>

<label for="dark-mode-input">Dark mode
    <input id="dark-mode-input" type="checkbox" checked={$settings.dark} on:change={handleChange} />
</label>