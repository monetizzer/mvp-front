import {
	Flex,
	Box,
	Heading,
	Text,
	FormControl,
	Input,
	Button,
	InputGroup,
	InputLeftElement,
	Divider,
	Wrap,
} from "@chakra-ui/react";
import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { SOCIAL_NETWORKS } from "configs/social-networks";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	email: string;
}

export const MainSection: FC = () => {
	const { t } = useTranslation("sign-in");
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			email: "",
		},
	});

	const { isValid, isSubmitting } = useFormState({ control });

	const onSubmit = (values: IForm) => {
		// eslint-disable-next-line no-console
		console.log(values);
	};

	return (
		<Flex direction={{ base: "column", bp6: "row" }} minH="100vh" h="full">
			<Flex
				as="aside"
				position="relative"
				flex={{ bp6: "7" }}
				minH={{ base: "55vh", bp6: "100vh" }}
				h="full"
				maxH={{ base: "55vh", bp6: "100vh" }}
				sx={{
					// eslint-disable-next-line @typescript-eslint/naming-convention
					"> img": {
						objectFit: "cover",
					},
				}}
			>
				<Box
					position="absolute"
					top="0"
					right="0"
					bottom="0"
					left="0"
					bgGradient="linear(to-t, #000000CC, #00000000)"
					zIndex="1"
				/>
				<Image
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iqNstYzCGjToqTb_yOeK_QHaFj%26pid%3DApi&f=1&ipt=6b9779b9df9b1d801a653779bb503a321942bfef5d0b26b5fa9f3bcbc2a7995f&ipo=images"
					alt="Mulher"
					fill
				/>
			</Flex>
			<Flex
				as="section"
				align="center"
				justify="center"
				flex={{ bp6: "8" }}
				minH={{ base: "45vh", bp6: "100vh" }}
				h="full"
				maxH={{ base: "45vh", bp6: "100vh" }}
				py="verticalPadding"
				px="horizontalPadding"
				overflowY="auto"
			>
				<Flex
					direction="column"
					gap="4"
					w="full"
					maxW={{ bp6: "container.xs" }}
				>
					<Flex as="header" direction="column" w="full">
						<Heading
							as="h1"
							bg="vividPrimary"
							bgClip="text"
							fontSize="heading.2"
							fontWeight="heading.2"
							lineHeight="heading.2"
						>
							{t("mainSection.header.title")}
						</Heading>
						<Text as="p">{t("mainSection.header.description")}</Text>
					</Flex>
					<Flex
						as="form"
						direction="column"
						gap="2"
						w="full"
						onSubmit={handleSubmit(onSubmit)}
					>
						<FormControl isInvalid={!isValid}>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<Icon color="secondText" fontSize="heading.4" name="email" />
								</InputLeftElement>
								<Input
									w="full"
									id="email"
									type="email"
									placeholder={t("mainSection.form.inputs.email.placeholder")}
									{...register("email", {
										required: true,
									})}
								/>
							</InputGroup>
						</FormControl>
						<Button w="full" type="submit" isLoading={isSubmitting}>
							{t("mainSection.form.submit")}
						</Button>
					</Flex>
					<Flex align="center" justify="center" gap="2" w="full">
						<Divider bg="alternate" orientation="horizontal" />
						<Text
							as="span"
							color="alternate"
							fontSize="text.2"
							fontWeight="text.2"
							lineHeight="text.2"
							whiteSpace="nowrap"
						>
							{t("mainSection.divider")}
						</Text>
						<Divider bg="alternate" orientation="horizontal" />
					</Flex>
					<Wrap align="center" justify="space-evenly" w="full">
						{SOCIAL_NETWORKS.map(socialNetwork => (
							<Link
								key={socialNetwork.name}
								href={socialNetwork.url}
								isExternal
								display="flex"
								alignItems="center"
								justifyContent="center"
								bg={socialNetwork.color}
								px="4"
								py="4"
								borderRadius="round"
							>
								<Icon fontSize="heading.4" name={socialNetwork.name} />
							</Link>
						))}
					</Wrap>
				</Flex>
			</Flex>
		</Flex>
	);
};
