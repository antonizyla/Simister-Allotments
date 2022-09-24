<script>

    import Footer from '../components/Footer.svelte';

    import '../global.css';

    import {closeModal, Modals} from 'svelte-modals';

    // cookie modal
    import { openModal } from "svelte-modals";
    import CookiesModal from "../components/CookiesModal.svelte";
    import { allowedCookies } from "../components/stores";

    if ($allowedCookies === 'false'){
        openModal(CookiesModal);
    }

    import {contents} from '$lib/contents'

</script>

<slot/>

<Footer data={contents}></Footer>

<Modals>
    <div class="backdrop" on:click={closeModal} slot="backdrop"/>
</Modals>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
