use yew::{html, Component, ComponentLink, Href, Html, InputData, ShouldRender};

pub struct HomeModel {}
pub enum HomeMsg {}

impl Component for HomeModel {
    type Message = HomeMsg;
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        HomeModel {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _props: Self::Properties) -> bool {
        true
    }

    fn view(&self) -> Html {
        html! {
            <div class="wrapper--home">
                <div class="wrapper--home__content">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF5wnUq3gVE7w/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=eWJhnuAIKwu6DptXd0r3_jRTJlq7fppinByTOOS7BnY" alt="Portrait" class="img__portrait"/>
                    <h1>{"Alexander Herlin!!"}</h1>
                </div>
            </div>
        }
    }
}
