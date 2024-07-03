import Slider from "react-slick"
import BlogCard from "../../components/BlogCard"
import { useEffect, useState } from "react"

const Blog: React.FC = () => {
	const [qtdSlide, setQtdSlide] = useState(3)
	const [arrows, setArrows] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setQtdSlide(1)
				setArrows(true)
			} else {
				setQtdSlide(3)
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const settings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: qtdSlide,
		slidesToScroll: 2,
		arrows: arrows,
	}

	const cardInfo = [
		{
			img: "",
			title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
			description:
				"Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",

			data: "12 Mar - Jhon Doe",
		},
		{
			img: "",
			title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
			description:
				"Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
			data: "12 Mar - Jhon Doe",
		},
		{
			img: "",
			title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
			description:
				"Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
			data: "12 Mar - Jhon Doe",
		},
	]

	return (
		<section className="w-full flex flex-col justify-center gap-12 py-24 max-sm:py-12 items-center z-40">
			<div className="w-full flex flex-col items-center gap-5 justify-center">
				<p className="font-bold text-4xl max-sm:text-2xl"> Blog</p>
				<p className="text-[#c5c5c5] max-sm:text-sm text-center w-2/3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>

			<div className="w-4/5 flex justify-center items-center gap-2 h-fit">
				{" "}
				<Slider {...settings} className="w-full z-40 flex">
					{cardInfo.map((info, index) => (
						<BlogCard
							key={index}
							img={info.img}
							title={info.title}
							description={info.description}
							data={info.data}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Blog
