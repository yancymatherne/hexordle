<script lang="ts">
import { fade } from "svelte/transition";

import { errorMessage } from "../../stores";

</script>

{#if $errorMessage}
    <div class="container" in:fade="{{ duration: 500 }}" out:fade="{{ duration: 1000 }}">
        <span class="message">{$errorMessage}</span>
    </div>
{/if}


<style>
    .container {
        position: fixed;
        top: 10vh;
        text-align: center;
        width: 100%
    }
    .message {
        background-color: aliceblue;
        padding: 1em;
        border-radius: 4px;
    }
</style>