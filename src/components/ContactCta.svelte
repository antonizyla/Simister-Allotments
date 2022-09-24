<script lang="ts">
    import Contact from './Contact.svelte';
    import Grid from 'svelte-grid-responsive';

    export let data;

</script>

<main>
    <Grid container columns={12} gutter={12}>
        <Grid lg={1} md={0} sm={0}></Grid>
        <Grid lg={5} md={6} sm={12}>
            <section>
                <h2>{data.text.title}</h2>
                <p>{data.text.subtext}</p>
            </section>
        </Grid>
        <Grid lg={5} md={6} sm={12}>
            <div class="contact">
                <Contact data={data}/>
            </div>
        </Grid>
        <Grid lg={1} md={0} sm={0}></Grid>
    </Grid>
</main>

<style>

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        gap: 2em;
        padding-left: 2em;
        padding-right: 2em;
    }

    .contact {
        padding: 2em;
    }

    main {
        padding: 3em 2em 3em 2em;
    }
</style>
