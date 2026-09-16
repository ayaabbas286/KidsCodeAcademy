import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export interface IReviews {
  id: string;
  parentName: string;
  reviewTxt: string;
  starsCount: number;
  imgUrl: string;
}
@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  @ViewChild('mySwiper') mySwiper!: ElementRef;
  ngAfterViewInit(): void {
    new Swiper(this.mySwiper.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      },
    });
  }
  reviews: IReviews[] = [
    {
      id: '1',
      parentName: 'ام زين',
      reviewTxt:
        'انا ابنى كان بيحب الالعاب بس دلوقتى بقا بيكتب كود بنفسه وويعمل العاب بسيطه ويجي يشاركنا بيها',
      starsCount: 5,
      imgUrl: 'assets/images/Users/woman.png',
    },
    {
      id: '2',
      parentName: 'والد ساندي ',
      reviewTxt:
        'انا بنتي كانت حابه تتعلم برمجة بس كانت بتلاقي صعوبة في انها تتعلمها وحدها وجربت قبل كده اكتر من مدرب بس كانت بتلاقي صعوبة في الفهم لكن ماشاء الله المدربين في الاكاديمية هنا ممتازين وبيبسطوا للطالب المعلومة جدا وبيستخدموا طرق كتيره حلوة وممتعه للفهم بشكركم على مجهودكم الرائع وفي تقدم دايما ',
      starsCount: 5,
      imgUrl: 'assets/images/Users/boy.png',
    },
    {
      id: '3',
      parentName: ' ام كريم',
      reviewTxt:
        'كريم ابني كنت بلاقي دماغه دايما شاطره ومتجهه للبرمجه بس مكنتش عارفه اوجهه ازاي والحمدلله لما لقيت الاكاديمية دي اشرتكت فيها على طول والفرق ماشاء الله واضح وبقيت الاقي نتيجه لحاجات بيعملها وبيتعلمها ويوريهالى شكرا انكم كنتم مصدر ثقه والمدربين شاطرين جدا ',
      starsCount: 5,
      imgUrl: 'assets/images/Users/woman.png',
    },
    {
      id: '4',
      parentName: 'والدة ياسين',
      reviewTxt:
        'بصراحة من اكتر الحاجات اللي عجبتني ان ابني بقى مستني معاد السيشن ومتحمس يدخل ويتعلم، في البداية كان شايف البرمجة حاجة صعبة لكن مع الوقت بدأ يفهمها ويطبق بنفسه وبقى عنده ثقة في نفسه اكتر، شكرا جدا لكل المدربين على اهتمامهم وصبرهم معاه.',
      starsCount: 5,
      imgUrl: 'assets/images/Users/woman.png',
    },

    {
      id: '5',
      parentName: 'أم ليان',
      reviewTxt:
        'ليان كانت بتحب الكمبيوتر جدا بس مكنتش عارفة تبدأ منين، ولما اشتركت معاها في الاكاديمية بدأت واحدة واحدة تفهم اساسيات البرمجة وتعمل مشاريع بسيطة بنفسها، اكتر حاجة فرحتني ان التعلم بالنسبالها بقى ممتع مش مجرد مذاكرة، ربنا يوفقكم دايما.',
      starsCount: 5,
      imgUrl: 'assets/images/Users/woman.png',
    },

    {
      id: '6',
      parentName: 'والد آدم',
      reviewTxt:
        'كنت متردد في الاول هل ابني هيقدر يتعلم برمجة في السن ده ولا لأ، لكن بصراحة التجربة كانت ممتازة جدا، طريقة الشرح سهلة والمدرب بيتابع معاه وبيشجعه انه يجرب بنفسه، وبعد فترة بدأت اشوف فرق واضح في طريقة تفكيره وحل المشاكل، تجربة جميلة جدا وبالتوفيق ليكم.',
      starsCount: 5,
      imgUrl: 'assets/images/Users/woman.png',
    },
  ];
}
