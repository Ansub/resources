import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const copyright = () => {
  return (
    <div>
      <Navbar />
      <section className="p-5">
        <div className="container">
          <h1 className="text-center">Copyright</h1>
          <div className="row">
            <div className="col-md">
              <p className="p-3 text-center">
                What is the ruling on putting copyrights on books and cassette
                tapes?
              </p>
              <p>
                Shaykh Muhammad ibn Salih al-‘Uthaymeen – may Allāh have mercy
                on him – was asked:
              </p>
              <p className="lead">
                Question: What is the ruling on writing the following clause
                (copyright reserved) on some religious books and cassette tapes?
              </p>
              <p>
                The Shaykh’s response: Some people have said to me: This clause
                has a great benefit, which is that if the copyright is reserved
                for the author or the printer [of the book], it will protect the
                book from tampering. Because if the book remains open to anyone
                who wants to print it, [the reality is] the people at the
                present time have a weak trust, so they may print the book in a
                distorted or altered way, and this will cause harm to the author
                and to the people as well. Harm is caused to the author because
                the error is attributed to him, and the people may be [harmed as
                well] because they may understand something incorrect [while
                believing it is] from the author.
              </p>
              <p>
                Based on this, if what is meant by this clause is to preserve
                the book and its safety from distortion, then this clause is
                legitimate and there is nothing wrong with it because what is
                intended by it is to preserve the book. However, if what is
                intended by this is to preserve the sharing in profit behind the
                book, then this is something that is not appropriate because the
                more knowledge is spread and disseminated, the more beneficial
                it is to the author and the printer firstly, then the Muslims in
                general.
              </p>
              <p>
                As for the cassette tapes, we have spoken with some people who
                keep the cassette tapes and say that the copyright or
                transmission rights are reserved for the recordings. And they
                say: We are doing this because we have spent a great amount of
                tools and equipment, workers, and writers [in producing them],
                and if they are not protected, anyone from the other recording
                [companies] can take the recording, copy it hundreds of
                thousands of copies, and the loss will remain upon us. If this
                reasoning is correct, then I say: The recording [companies]
                should retain the rights of reproduction for themselves until
                they earn back what they spent on these cassette tapes, and if
                they earn back what they spent, they should allow the people to
                copy it.
              </p>
              <p>
                For example, if it is estimated that ten thousand was spent on
                these cassette tapes, then we say: When ten thousand is earned
                from them, then allow the people to copy them; because after
                [the company] earns back what they spent, there is no loss for
                them. At that time, they should not monopolize knowledge and
                prevent the people from benefiting from them. Rather, we say: If
                they permit people to do this and spread the cassette tapes on
                their end, then they will have the reward according to what the
                people benefit from these cassette tapes.
              </p>
              <p>
                There remains another question that arises from this: Is it
                permissible for someone who buys these cassette tapes on which
                the copying or transmission rights are reserved; is it
                permissible for them to give someone to copy the cassette tape
                that they bought, or is it not permissible? The answer is that
                there is a detailed explanation for this: If copying [the tapes]
                is for the purpose of trade, then it is not permissible; and
                based on this, if someone asks me to copy the tapes or other
                recordings, then I should not give them to him. But if the one
                who asks me is a friend of mine who wants to benefit from them
                and listen to them, then there is no problem with this.
              </p>
              <p>
                [Lessons and Fatwas in the Sacred Mosque: General Miscellaneous
                Fatwas]
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default copyright
