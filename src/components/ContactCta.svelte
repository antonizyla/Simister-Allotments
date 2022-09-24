<script lang="ts">
    import Contact from './Contact.svelte';
    import Grid from 'svelte-grid-responsive';

    export let data;

</script>

<main>
    <Grid container gutter={12}>
        <Grid lg={2.5} md={2}/>
        <Grid lg={3.5} md={5} sm={12}>
            <section>
                <h2>{data.text.title}</h2>
                <p>{data.text.subtext}</p>
            </section>
        </Grid>
        <Grid lg={3.5} md={5} sm={12}>
            <div class="contact">
                <Contact data={data.form}/>
            </div>
        </Grid>``
        <Grid lg={2.5} md={2}/>
    </Grid>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        gap: 1.5em;
        padding-left: 2em;
        padding-right: 2em;
    }

    .contact {
        padding-left: 2em;
        padding-right: 3em;
        padding-top: 2em;
        padding-bottom: 2em;
    }

    main {
        padding-top: 3em;
        padding-bottom: 3em;
    }
</style>
