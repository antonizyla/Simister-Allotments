<script>
	import Splash from '../components/Splash.svelte';
	import ContactCta from '../components/ContactCta.svelte';
	import About from '../components/About.svelte';
	import ImageGallery from '../components/ImageGallery.svelte';

	import { contents } from '$lib/contents';

</script>

<section>
	<Splash data={Object.assign(contents.home, contents.navigation)}/>
	<ContactCta data={contents.contact}/>
	<About data={contents.about} />
	<ImageGallery data={contents.gallery}/>
</section>

