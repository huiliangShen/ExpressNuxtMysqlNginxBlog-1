<template>
	<header class="header">
		<div class="header-div">
			<div class="header-div-span">
				<img class="header-img" :src="imgsrc">
				<p class="header-title">{{desc}}</p>
			</div>
			<div class="header-div-span">
				<!-- <button @click="writeBlog" type="button">写文章</button>
				<button v-if="!hasLogined" @click="goLogin" type="button">登陆</button>
				<button v-if="!hasLogined" @click="regist" type="button">注册</button>
				<button v-if="hasLogined" @click="loginOut" type="button">退出</button> -->

                <a @click.prevent.stop="writeBlog">写文章</a>
				<a v-if="!hasLogined" @click.prevent.stop="goLogin">登录</a>
				<a v-if="!hasLogined" @click.prevent.stop="regist">注册</a>
				<a v-if="hasLogined" @click.prevent.stop="loginOut">退出</a>
			</div>
		</div>
		<div :class="['login-Box',loginBoxState]" @click="clickLoginBoxBG">
			<div class="box" @click.stop="">
				<div class="loginForm">
                    <i class="iconfont icon-close"></i>
                    <h1 class="title">登录</h1>
                    <div class="from-control">
                        <input type="text" v-model="name" placeholder="请输入用户名">
                    </div>
					<div class="from-control">
                        <input type="text" v-model="password" placeholder="请输入密码">
                    </div>
					<a @click.stop="doLogin" class="button">登录</a>
                    <div class="forget">
                        <span>没有账号？ <b>前往注册</b></span>
                        <span>忘记密码</span>
                    </div>
				</div>
			</div>
		</div>
		<notifications group="foo" />
	</header>
</template>

<script>
	import axios from "axios";
	import userLoginUtil from "~/util/userLoginUtil.js";
	export default {
		data() {
			return {
				imgsrc: "/img/headIcon.png",
				desc: "亲爱的，欢迎光临",
				hasLogined: false,
				loginBoxState: "hiddenLoginBox",
				name: null,
				password: null
			};
		},
		// async asyncData() {
		// 	let imgsrc = "/img/headIcon.png";
		// 	let	desc = "亲爱的，欢迎光临";
		// 	let	hasLogined = false;
		// 	let user = userLoginUtil.getLoginedUser();
		// 	if (user) {
		// 		imgsrc = "/img/" + user.avatar;
		// 		desc = user.bio;
		// 		// this.loginBoxState = "hiddenLoginBox";
		// 		hasLogined = true;
		// 	}else{
		// 		hasLogined = false;
		// 	}
		// 	return {
		// 		imgsrc:imgsrc,
		// 		desc:desc,
		// 		hasLogined:hasLogined
		// 	};
		// },
		mounted() {
			this.asyncLoginIofo();
		},
		props: {
			testname: {
				default: null
			}
		},
		methods: {
			clickLoginBoxBG() {
				this.loginBoxState = "hiddenLoginBox";
			},
			asyncLoginIofo() {
				let user = userLoginUtil.getLoginedUser();
				if (user) {
					this.imgsrc = "/img/" + user.avatar;
					this.desc = user.bio;
					// this.loginBoxState = "hiddenLoginBox";
					this.hasLogined = true;
				} else {
					this.imgsrc = "/img/headIcon.png";
					this.desc = "亲爱的，欢迎光临";
					this.hasLogined = false;
				}
			},
			writeBlog() {
				if (this.hasLogined) {
					
				} else {
					this.loginBoxState = "showLoginBox";
				}
			},
			goLogin() {
				// location.href = "/login"
				this.loginBoxState = "showLoginBox";
			},
			async doLogin() {
				var url = "/api/login";
				let result = await axios({
					method: "post",
					url: url,
					data: {
						name: "黄成都",
						password: "huang303513"
					}
				}).catch(error => {
					console.log("===============error==========", error);
				});
				//console.log(result);
				var user;
				if (result.data && !result.data.err && result.data.user) {
					user = result.data.user;
					this.imgsrc = "/img/" + user.avatar;
					this.desc = user.bio;
					this.loginBoxState = "hiddenLoginBox";
					this.hasLogined = true;
					userLoginUtil.setLoginedUser(user);
					// this.$notify({
					// 	group: 'foo',
					// 	title: 'Important message',
					// 	text: 'Hello user! This is a notification!'
					// });
				} else {}
				console.log(JSON.stringify(user));
			},
			regist() {
				// console.log(this.$root);
				// this.testname = "详情页";
				// userLoginUtil.checkLogined();
				//this.$root.$loading.show = true;;
				//alert("dd" + this.$root.testname);
				// alert(this.$root.testname);
				window.location.href = "/regist";
			},
			async loginOut() {
				var url = "/api/signout";
				let result = await axios.get(url).catch(error => {
					console.log("===============error==========", error);
				});
				if (result.data && !result.data.err && (result.data.code == 200)) {
					userLoginUtil.setLogout();
					this.asyncLoginIofo();
				}
			}
		}
	}
</script>

<style lang="less" scoped>
    @import "~assets/less/define.less";
    @import "~assets/less/iconfont.less";
	.header {
		background-color: white;
		position: fixed;
		z-index: 500;
		top: 0px;
		width: 100%;
		max-width: @defaultWidth;
		height: @headerHeight;
		margin-bottom: @headerHeight;
		line-height: @headerHeight;
		.header-div {
			justify-content: space-between;
			display: flex;
		}
		.header-div-span {
			align-items: center;
			display: flex;
		}
		.header-img {
			height: @headerHeight - 0.5;
			width: @headerHeight - 1;
			margin-left: 0.7rem;
		}
		.header-title {
			font-size: 1.2rem;
			margin-left: 0.7rem;
			color: @defaultDarkColor;
		}
		button, a {
			color: @defaultBlue;
			font-size: 1.2rem;
			margin-right: 0.7rem;
			padding: 5px 0px;
			cursor: pointer;
		}
	}
	.showLoginBox {
		display: block;
	}
	.hiddenLoginBox {
		display: none;
	}
	.login-Box {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		z-index: 1001;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		.box {
			position: relative;
			z-index: 1002;
			top: 50%;
			left: 50%;
			overflow: hidden;
			width: 25rem;
			height: 30rem;
			text-align: center;
			border-radius: 6px;
			background-color: rgba(255, 255, 255, 1);
			color: black;
			transform: translate3d(-50%, -50%, 0) scale(1);
			.loginForm {
                background-color: white;
                width: 80%;
                margin: 0 auto;
                .icon-close {
                    float: right;
                    opacity: 0.4;
                    font-size: 20px;
                    cursor: pointer;
                }
                .title {
                    font-size: 20px;
                    text-align: left;
                }
                .from-control {
                    margin-bottom: 5px;
                    input {
                        width: 100%;
                        border: 1px solid #e9e9e9;
                        padding: 10px;
                        &:focus {
                             border: 1px solid @defaultBlue;
                        }
                    }
                }
                .button {
                    display: inline-block;
                    height: 30px;
                    width: 100%;
                    line-height: 30px;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 200;
                    color: #ffffff;
                    background: @defaultBlue;
                    box-sizing: content-box;
                    margin: 0;
                }
                .forget {
                    span:first-child {
                        float: left;
                        b {
                            color: @defaultBlue;
                            cursor: pointer;
                        }
                    }
                    span:last-child {
                        float: right;
                        color: @defaultBlue;
                        cursor: pointer;
                    }
                }
			}
		}
	}
</style>

